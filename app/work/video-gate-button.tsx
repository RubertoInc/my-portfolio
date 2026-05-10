"use client";

import { FormEvent, useState } from "react";

type VideoGateButtonProps = {
  videoUrl: string;
};

const screenerPassword = "PEG26";

export function VideoGateButton({ videoUrl }: VideoGateButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (password.trim() !== screenerPassword) {
      setError("Try again.");
      return;
    }

    window.location.assign(videoUrl);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-100/85 backdrop-blur-sm transition-colors hover:border-amber-200/35 hover:text-amber-100 focus:outline-none focus-visible:border-amber-200/50"
      >
        Watch Screener
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-950 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-2">
              <p className="eyebrow text-[11px] text-amber-200/80">
                Private Screener
              </p>
              <label
                htmlFor="video-password"
                className="block text-sm leading-6 text-stone-200/82"
              >
                Enter code to continue.
              </label>
              <input
                id="video-password"
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="off"
                className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-stone-50 outline-none transition-colors placeholder:text-stone-500 focus:border-amber-200/45"
                autoFocus
              />
              {error ? <p className="text-sm text-red-300">{error}</p> : null}
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setPassword("");
                  setError("");
                }}
                className="rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-300 transition-colors hover:text-stone-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-amber-100 transition-colors hover:bg-amber-200/15 disabled:cursor-wait disabled:opacity-60"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
