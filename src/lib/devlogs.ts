import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Dev logs live as markdown in content/devlogs/<slug>.md and are served at /devlog/<slug>.
// Frontmatter holds the header info; each "## Heading" in the body becomes its own card.
const DEVLOG_DIR = path.join(process.cwd(), "content", "devlogs");

export type DevLogSection = {
    heading: string;
    body: string;
};

export type DevLog = {
    slug: string;
    title: string;
    summary: string;
    // Optional until the project has them
    coverImage?: string;
    githubUrl?: string;
    liveUrl?: string;
    techStack?: string[];
    sections: DevLogSection[];
};

export function getDevLogSlugs(): string[] {
    return fs
        .readdirSync(DEVLOG_DIR)
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));
}

export function getDevLog(slug: string): DevLog | undefined {
    const file = path.join(DEVLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(file)) return undefined;

    const { data, content } = matter(fs.readFileSync(file, "utf-8"));

    // Split on "## " headings; anything before the first heading is ignored
    const sections = content
        .split(/^## /m)
        .slice(1)
        .map((chunk) => {
            const [heading, ...rest] = chunk.split("\n");
            return { heading: heading.trim(), body: rest.join("\n").trim() };
        });

    return {
        slug,
        title: data.title ?? slug,
        summary: data.summary ?? "",
        coverImage: data.coverImage,
        githubUrl: data.githubUrl,
        liveUrl: data.liveUrl,
        techStack: data.techStack,
        sections,
    };
}
