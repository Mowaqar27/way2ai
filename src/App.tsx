import { FormEvent, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Download, Film, Loader2 } from "lucide-react";

type DownloadFormat = {
  label: string;
  quality?: string;
  url: string;
  fileSize?: string;
};

type DownloadResponse = {
  title?: string;
  caption?: string;
  thumbnail?: string;
  formats: DownloadFormat[];
};

const API_ENDPOINT = "/api/download";

function isValidInstagramReelUrl(value: string) {
  try {
    const url = new URL(value.trim());
    const isInstagramHost = /(^|\.)instagram\.com$/.test(url.hostname);
    const hasReelPath = url.pathname.includes("/reel/") || url.pathname.includes("/p/");
    return isInstagramHost && hasReelPath;
  } catch {
    return false;
  }
}

export function App() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<DownloadResponse | null>(null);

  const canSubmit = useMemo(() => isValidInstagramReelUrl(url), [url]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setResult(null);

    if (!canSubmit) {
      setError("Enter a valid Instagram Reel link (example: https://www.instagram.com/reel/...).");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(body || "Could not fetch download links.");
      }

      const data = (await response.json()) as DownloadResponse;

      if (!data.formats?.length) {
        throw new Error("No downloadable formats returned by server.");
      }

      setResult(data);
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while processing that reel.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="mx-auto max-w-5xl px-6 pb-8 pt-14 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-sm text-fuchsia-200">
          <Film className="h-4 w-4" />
          Instagram Reel Downloader
        </div>
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Download Instagram reels in a couple of clicks
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Paste a public Instagram reel URL and get direct video download links from your backend service.
        </p>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-6 pb-16 md:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-2xl shadow-black/30">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-slate-300" htmlFor="reel-url">
              Reel URL
            </label>
            <input
              id="reel-url"
              type="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://www.instagram.com/reel/ABC123"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-4 py-3 font-semibold text-white transition hover:bg-fuchsia-500 disabled:cursor-not-allowed disabled:bg-fuchsia-800"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
              {isLoading ? "Processing..." : "Get download links"}
            </button>
          </form>

          {error ? (
            <div className="mt-4 rounded-xl border border-rose-500/50 bg-rose-500/10 p-3 text-sm text-rose-200">
              <div className="inline-flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            </div>
          ) : null}

          {result ? (
            <div className="mt-6 space-y-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
              <div className="inline-flex items-center gap-2 text-sm text-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
                Reel parsed successfully
              </div>

              {result.title ? <h2 className="text-lg font-semibold text-white">{result.title}</h2> : null}
              {result.caption ? <p className="text-sm text-slate-200">{result.caption}</p> : null}
              {result.thumbnail ? (
                <img
                  src={result.thumbnail}
                  alt="Reel preview"
                  className="max-h-72 w-full rounded-lg border border-slate-700 object-cover"
                />
              ) : null}

              <div className="space-y-2">
                {result.formats.map((format, index) => (
                  <a
                    key={`${format.url}-${index}`}
                    href={format.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm hover:border-fuchsia-500"
                  >
                    <span>{format.label}{format.quality ? ` • ${format.quality}` : ""}</span>
                    <span className="text-slate-300">{format.fileSize ?? "Download"}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        <aside className="space-y-4 rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold">How to wire backend API</h2>
          <ol className="list-inside list-decimal space-y-2 text-sm text-slate-300">
            <li>Create a POST endpoint at <code className="rounded bg-slate-800 px-1">{API_ENDPOINT}</code>.</li>
            <li>Accept JSON body: <code className="rounded bg-slate-800 px-1">{"{ url: string }"}</code>.</li>
            <li>Return <code className="rounded bg-slate-800 px-1">title</code>, <code className="rounded bg-slate-800 px-1">thumbnail</code>, and <code className="rounded bg-slate-800 px-1">formats[]</code>.</li>
            <li>Each format should include at least <code className="rounded bg-slate-800 px-1">label</code> and direct <code className="rounded bg-slate-800 px-1">url</code>.</li>
          </ol>
          <p className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-xs text-amber-100">
            Only download content when you have permission from the owner and comply with Instagram terms and local laws.
          </p>
        </aside>
      </main>
    </div>
  );
}
