//import all necessary elements
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Video from "../video";

//React component called Row which is called inside the Table Compoenent below
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.day}
                </TableCell>
                <TableCell align="right">{row.topicsCovered}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                {row.day}
                            </Typography>
                            <Table size="small" aria-label="week data">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            External Resources
                                        </TableCell>
                                        <TableCell>
                                            Lecture Recordings
                                        </TableCell>
                                        <TableCell>Classroom Links</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <a href={row.externalResources[0]}>
                                                {row.externalResources[0]}
                                            </a>
                                            <br />
                                            <a href={row.externalResources[1]}>
                                                {row.externalResources[1]}
                                            </a>
                                            <br />
                                            <a href={row.externalResources[2]}>
                                                {row.externalResources[2]}
                                            </a>
                                        </TableCell>
                                        <TableCell>
                                            <Video src={row.lectureRecording} />
                                        </TableCell>
                                        <TableCell>
                                            <a href={row.classroomLink}>
                                                {row.classroomLink}
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

//function which ensures data inputted into Row is of a certain type (in this case ensure all inputs are strings)
Row.propTypes = {
    row: PropTypes.shape({
        day: PropTypes.string.isRequired,
        referenceMaterial: PropTypes.string.isRequired,
        lectureRecording: PropTypes.string.isRequired,
        classroomLink: PropTypes.string.isRequired,
    }).isRequired,
};

//function which passes data to rows array below
function createData(
    day,
    topicsCovered,
    description,
    externalResources,
    lectureRecording,
    classroomLink
) {
    return {
        day,
        topicsCovered,
        description,
        externalResources,
        lectureRecording,
        classroomLink,
    };
}

//array called rows which calls the function createData
const rows = [
    [
        createData(
            "Monday",
            "Computational thinking",
            "Introduce the Soft. Eng. mindset",
            [
                "https://online.york.ac.uk/what-is-computational-thinking/",
                "https://ctpdonline.org/computational-thinking/",
            ],
            "https://www.youtube.com/embed/0Es2ixgp6vA",
            "No links today"
        ),
        createData(
            "Tuesday",
            "Git",
            "Introduction to git",
            [
                "https://www.w3schools.com/git/default.asp",
                "https://training.github.com/downloads/github-git-cheat-sheet.pdf",
                "https://www.freecodecamp.org/news/git-cheat-sheet/",
            ],
            "Placeholder2",
            ["https://github.com/SchoolOfCode/bc14_w1d2_workshop_git-in-teams-room_36_mq_mh_", "https://github.com/SchoolOfCode/bc14_w1d3_workshop_js-102-room_36_mq_mh_"]
        ),
        createData(
            "Wednesday",
            "JavaScript",
            "Basic JavaScript",
            [
                "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables",
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else",
            ],
            "Placeholder3",
            ["https://github.com/SchoolOfCode/bc14_w1d3_workshop_js-101-room_36_mq_mh_", "https://github.com/SchoolOfCode/bc14_w1d3_workshop_js-102-room_36_mq_mh_" ]
        ),
        createData(
            "Thursday",
            "JavaScript",
            "Objects in JavaScript",
            [
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object-",
                "https://www.w3schools.com/js/js_objects.asp",
            ],
            "Placeholder4",
            "https://github.com/SchoolOfCode/bc14_w1d4_workshop_objects-room_36_mq_mh_"
        ),
        createData(
            "Friday",
            "JavaScript",
            "Basic JS Hackathon!",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.w3schools.com/",
            ],
            "Placeholder5",
            "https://github.com/SchoolOfCode/bc14_w1d5_hackathon_rps-room_36_mq_mh_"
        ),
    ],
    [
        createData(
            "Monday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com",
                "https://developer.mozilla.org/en-US/",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Tuesday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Wednesday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Thursday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Friday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
    ],

    [
        createData(
            "Monday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Tuesday",
            "Loreum Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Wednesday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Thursday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Friday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
    ],
    [
        createData(
            "Monday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Tuesday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Wednesday",
            "Lorem Ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "github link here"
        ),
        createData(
            "Thursday",
            "Lorem ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "Lorem ipsum"
        ),
        createData(
            "Friday",
            "Lorem ipsum",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Placeholder link",
            "Lorem ipsum"
        ),
    ],
];

//component which is exported into timeline component to render a table
//consists of a table header which has metadata currently hardcoded
//has a table body which maps over the rows array and for each element in rows array calls
//the Row component and renders to screen

export default function CollapsibleTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Week {props.week + 1}</TableCell>
                        <TableCell align="right">Topics Covered</TableCell>
                        <TableCell align="right">Brief Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows[props.week].map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
