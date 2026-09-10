"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, ArrowRight } from "lucide-react";
import {
  COMING_SOON_PASSWORD,
  COMING_SOON_KEY,
  LAUNCH_DATE,
  getTimeRemaining,
  isSiteUnlocked,
} from "@/lib/comingSoon";

const countdownItems = [
  { label: "Days", key: "days" },
  { label: "Hours", key: "hours" },
  { label: "Minutes", key: "minutes" },
  { label: "Seconds", key: "seconds" },
] as const;

export default function ComingSoonGate({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining());

  useEffect(() => {
    setIsUnlocked(isSiteUnlocked());
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeRemaining());
      if (Date.now() >= LAUNCH_DATE.getTime()) {
        setIsUnlocked(true);
        window.clearInterval(interval);
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const countdown = useMemo(
    () =>
      countdownItems.map((item) => ({
        ...item,
        value: timeLeft[item.key],
      })),
    [timeLeft]
  );

  const handleUnlock = () => {
    if (password.trim().toLowerCase() === COMING_SOON_PASSWORD) {
      localStorage.setItem(COMING_SOON_KEY, "true");
      setIsUnlocked(true);
      setError("");
      return;
    }

    setError("Incorrect password. Try again.");
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0b0d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,204,0,0.18),_transparent_38%),linear-gradient(135deg,#0b0b0d_0%,#111214_45%,#08090b_100%)]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-5xl px-6 py-12"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ffcc00]/40 bg-[#ffcc00]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#ffcc00]">
              <ShieldCheck size={14} />
              Coming Soon
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-[-0.065em] text-white sm:text-5xl lg:text-7xl">
              The next chapter of Hatsoff is almost here.
            </h1>

            <p className="mt-5 max-w-lg text-base text-neutral-300 sm:text-lg">
              We&apos;re preparing something bold, sharp, and built to elevate brands. Launching on the 14th of Monday, with access available to selected guests.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {countdown.map((item) => (
                <div key={item.key} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-black text-[#ffcc00] sm:text-4xl">{String(item.value).padStart(2, "0")}</div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-lg sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffcc00] text-black">
                <Lock size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Private Access</p>
                <h2 className="mt-1 text-2xl font-bold text-white">Enter Password</h2>
              </div>
            </div>

            <label className="mb-3 block text-sm font-medium text-neutral-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) setError("");
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleUnlock();
              }}
              placeholder="Type the launch password"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-base text-white placeholder:text-neutral-500 focus:border-[#ffcc00] focus:outline-none"
            />

            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

            <button
              type="button"
              onClick={handleUnlock}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ffcc00] px-5 py-3.5 text-sm font-bold text-black transition-transform duration-200 hover:scale-[1.01] hover:bg-[#ffd947]"
            >
              Unlock site
              <ArrowRight size={16} />
            </button>

            <div className="mt-6 rounded-2xl border border-[#ffcc00]/20 bg-[#ffcc00]/5 p-4 text-sm text-neutral-300">
              Launch target: <span className="font-semibold text-[#ffcc00]">{LAUNCH_DATE.toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short" })}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
