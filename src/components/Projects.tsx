import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import ImageIcon from '@mui/icons-material/Image';
import LaunchIcon from '@mui/icons-material/Launch';

import { Container, Box, Typography, Button } from "@mui/material";

const bartBlue = "#0099D8";

type Project = {
    name: string;
    summary: string;
    githubUrl: string;
    // Optional until the project has them
    liveUrl?: string;
    imageUrl?: string;
    devLogUrl?: string;
};

const projects: Project[] = [
    {
        name: "Busable",
        summary: "Build an application to find interesting places that are accessible by bus near you!",
        githubUrl: "https://github.com/FranzKieviet/busable",
        liveUrl: "https://franzkieviet.com/busable",
        imageUrl: "/devlogs/busable/cover.png",
        devLogUrl: "/devlog/busable",
    },
];

const projectCard = {
    backgroundColor: "white",
    borderRadius: 2,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    // smooth hover transitions
    transition: "transform 0.22s ease, box-shadow 0.22s ease",
    "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.08)",
    }
};

const projectImage = {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    display: "block",
};

const imagePlaceholder = {
    ...projectImage,
    bgcolor: "#c2e7f6ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const linkButton = {
    color: bartBlue,
    fontWeight: "bold",
    textTransform: "none",
};

export default function Projects() {
    return (
        <Box id="projects" sx={{ width: "100%", py: 1 }}>
            <Container maxWidth="md" sx={{ borderRadius: 2, p: 3 }}>
                <Typography className="sectionTitle" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: '800' }}>
                    <span className="sectionTitleUnderline">Projects:</span>
                </Typography>

                <Box sx={{
                    py: 3,
                    display: "grid",
                    gap: 3,
                    // 1 column on xs, 2 columns on sm+
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                }}>
                    {projects.map((project) => (
                        <Box key={project.name} sx={projectCard}>
                            {project.imageUrl ? (
                                <Box component="img" src={project.imageUrl} alt={project.name} sx={projectImage} />
                            ) : (
                                <Box sx={imagePlaceholder}>
                                    <ImageIcon sx={{ fontSize: 48, color: bartBlue, opacity: 0.5 }} />
                                </Box>
                            )}

                            <Box sx={{ p: 2, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                <Typography sx={{ fontWeight: "bold", fontSize: "1.25rem", color: "black" }}>
                                    {project.name}
                                </Typography>
                                <Typography sx={{ fontSize: "0.9rem", color: "gray", py: 1, flexGrow: 1 }}>
                                    {project.summary}
                                </Typography>

                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                    {project.liveUrl && (
                                        <Button
                                            sx={linkButton}
                                            startIcon={<LaunchIcon />}
                                            component="a"
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Site
                                        </Button>
                                    )}
                                    <Button
                                        sx={linkButton}
                                        startIcon={<GitHubIcon />}
                                        component="a"
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </Button>
                                    {project.devLogUrl ? (
                                        <Button
                                            sx={linkButton}
                                            startIcon={<ArticleIcon />}
                                            component="a"
                                            href={project.devLogUrl}
                                        >
                                            Dev Log
                                        </Button>
                                    ) : (
                                        <Button sx={linkButton} startIcon={<ArticleIcon />} disabled>
                                            Dev Log (coming soon)
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
