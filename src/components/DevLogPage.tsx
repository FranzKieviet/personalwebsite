"use client";

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Container, Box, Typography, Button, Chip } from "@mui/material";
import Markdown, { Components } from "react-markdown";
import Navbar from "@/components/Navbar";
import type { DevLog } from "@/lib/devlogs";

const bartBlue = "#0099D8";

const card = {
    backgroundColor: "white",
    borderRadius: 2,
    p: { xs: 2.5, md: 4 },
    mb: 3,
    textAlign: "left",
};

const bodyText = {
    fontSize: { xs: "0.95rem", md: "1.05rem" },
    lineHeight: 1.75,
    color: "#333",
    mb: 2,
};

const listStyle = {
    ...bodyText,
    pl: 3,
    "& li": { mb: 1 },
    "& li::marker": { color: bartBlue, fontWeight: "bold" },
};

const linkButton = {
    color: bartBlue,
    fontWeight: "bold",
    textTransform: "none",
};

const image = {
    width: "100%",
    display: "block",
    borderRadius: 2,
    border: "1px solid #e0e0e0",
};

// Map markdown elements onto the site's styles
const markdownComponents: Components = {
    p: ({ node, children }) => {
        // A paragraph of only images (one per line in the .md) becomes a side-by-side gallery
        const elements = node?.children.filter((c) => !(c.type === "text" && !c.value.trim())) ?? [];
        const images = elements.filter((c) => c.type === "element" && c.tagName === "img");
        if (images.length > 1 && images.length === elements.length) {
            return (
                <Box sx={{ display: "grid", gap: 2, mb: 2, alignItems: "start", gridTemplateColumns: { xs: "1fr", sm: `repeat(${Math.min(images.length, 3)}, 1fr)` } }}>
                    {children}
                </Box>
            );
        }
        return <Typography component="div" sx={bodyText}>{children}</Typography>;
    },
    img: ({ src, alt, title }) => (
        <Box component="figure" sx={{ my: 2 }}>
            <Box component="img" src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" sx={image} />
            {title && (
                <Typography component="figcaption" sx={{ fontSize: "0.8rem", color: "gray", textAlign: "center", mt: 1 }}>
                    {title}
                </Typography>
            )}
        </Box>
    ),
    h3: ({ children }) => (
        <Typography component="h3" sx={{ fontWeight: "bold", fontSize: { xs: "1.05rem", md: "1.2rem" }, color: "#385562", mt: 3, mb: 1 }}>
            {children}
        </Typography>
    ),
    ol: ({ children }) => <Box component="ol" sx={listStyle}>{children}</Box>,
    ul: ({ children }) => <Box component="ul" sx={listStyle}>{children}</Box>,
    a: ({ href, children }) => (
        <Box component="a" href={href} target="_blank" rel="noopener noreferrer" sx={{ color: bartBlue, fontWeight: "bold" }}>
            {children}
        </Box>
    ),
};

export default function DevLogPage({ log }: { log: DevLog }) {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #ffffff, #0099D8)",
            }}
        >
            <Navbar />

            <Container maxWidth="md" sx={{ pt: 12, pb: 6 }}>
                <Button sx={{ ...linkButton, mb: 2 }} startIcon={<ArrowBackIcon />} component="a" href="/#projects">
                    Back to projects
                </Button>

                {/* Header */}
                {log.coverImage && (
                    <Box
                        component="img"
                        src={log.coverImage}
                        alt={log.title}
                        sx={{ display: "block", width: "100%", borderRadius: "8px 8px 0 0", aspectRatio: "16 / 6", objectFit: "cover" }}
                    />
                )}
                <Box sx={{ ...card, ...(log.coverImage && { borderRadius: "0 0 8px 8px" }) }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "0.75rem", color: "gray", letterSpacing: 1 }}>
                        DEV LOG
                    </Typography>
                    <Typography className="sectionTitle" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: '800', mb: 1 }}>
                        <span className="sectionTitleUnderline">{log.title}</span>
                    </Typography>
                    <Typography sx={{ ...bodyText, color: "gray" }}>{log.summary}</Typography>

                    {log.techStack && (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                            {log.techStack.map((tech) => (
                                <Chip key={tech} label={tech} size="small" sx={{ bgcolor: "#c2e7f6ff", color: "#385562", fontWeight: "bold" }} />
                            ))}
                        </Box>
                    )}

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {log.liveUrl && (
                            <Button sx={linkButton} startIcon={<LaunchIcon />} component="a" href={log.liveUrl} target="_blank" rel="noopener noreferrer">
                                Live Site
                            </Button>
                        )}
                        {log.githubUrl && (
                            <Button sx={linkButton} startIcon={<GitHubIcon />} component="a" href={log.githubUrl} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </Button>
                        )}
                    </Box>
                </Box>

                {/* Sections */}
                {log.sections.map((section) => (
                    <Box key={section.heading} sx={card}>
                        <Typography className="sectionTitle" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: '800' }}>
                            <span className="sectionTitleUnderline">{section.heading}</span>
                        </Typography>
                        <Markdown components={markdownComponents}>{section.body}</Markdown>
                    </Box>
                ))}
            </Container>
        </Box>
    );
}
