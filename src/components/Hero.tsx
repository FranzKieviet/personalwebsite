import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from '@mui/icons-material/Article';

import { Container, Stack, Button, IconButton, Box, Typography } from "@mui/material";

export default function Hero() {
    return (
        <Container maxWidth="md">
            <Typography variant="h2">
                Hi! I'm Franz
            </Typography>

            <Typography variant="h4" sx={{ mt: 2 }}>
                Software Engineer, EECS from UC Berkeley
            </Typography>

            {/* We add a box to center the entire button group */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                {/* Stack to handle the layout between the buttons */}
                <Stack direction="row" spacing={3}>
                    <IconButton href="https://franzkieviet.com/resume" target="_blank" size="medium">
                        <ArticleIcon fontSize="large"/>
                    </IconButton>
                    <IconButton href="https://github.com/franzkieviet" target="_blank" size="medium">
                        <GitHubIcon fontSize="large"/>
                    </IconButton>
                    <IconButton href="https://linkedin.com/in/franzkieviet" target="_blank" size="medium">
                        <LinkedInIcon fontSize="large"/>
                    </IconButton>
                </Stack>
            </Box>
            
        </Container>


    );
}