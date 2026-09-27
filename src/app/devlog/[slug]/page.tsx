import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DevLogPage from "@/components/DevLogPage";
import { getDevLogSlugs, getDevLog } from "@/lib/devlogs";

// Only slugs with a matching content/devlogs/<slug>.md are valid; anything else 404s
export const dynamicParams = false;

export function generateStaticParams() {
    return getDevLogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const log = getDevLog((await params).slug);
    return log ? { title: `${log.title} Dev Log | Franz Kieviet`, description: log.summary } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const log = getDevLog((await params).slug);
    if (!log) notFound();
    return <DevLogPage log={log} />;
}
