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
                <TableCell align="right">{row.referenceMaterial}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.classroomLink}</TableCell>
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
                                        <TableCell>Links</TableCell>
                                        <TableCell>
                                            Lecture Recordings
                                        </TableCell>
                                        <TableCell>Classroom Links</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <a href={row.links[0]}>
                                                {row.links[0]}
                                            </a>
                                            <br />
                                            <a href={row.links[1]}>
                                                {row.links[1]}
                                            </a>
                                            <br />
                                            <a href={row.links[2]}>
                                                {row.links[2]}
                                            </a>
                                        </TableCell>
                                        <TableCell>
                                            <a href={row.lectureRecording}>
                                                {row.lectureRecording}
                                            </a>
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
    description,
    links,
    referenceMaterial,
    lectureRecording,
    classroomLink
) {
    return {
        day,
        description,
        links,
        referenceMaterial,
        lectureRecording,
        classroomLink,
    };
}

//array called rows which calls the function createData
const rows = [
    [
        createData(
            "Monday",
            "This week we covered....",
            [
                "https://www.google.com ",
                "https://www.bing.com",
                "https://www.gooogle.com",
            ],
            "Basics of JS, HTML, CSS",
            "yes available",
            "github link here"
        ),
        createData(
            "Tuesday",
            "https://www.google.com",
            "Basics of JS, HTML, CSS",
            "yes available",
            ""
        ),
        createData("Wednesday", "", "", "", ""),
        createData("Thursday", "", "", "", ""),
        createData("Friday", "", "", "", ""),
    ],
    [
        createData("Monday", "Week 2", "yes availabe", ""),
        createData("Tuesday", "react", "Not currently", ""),
        createData("Wednesday", "", "", ""),
        createData("Thursday", "", "", ""),
        createData("Friday", "", "", ""),
    ],
    [
        createData("Monday", "https://www.google.com/ ", "yes availabe", ""),
        createData("Tuesday", "react", "Not currently", ""),
        createData("Wednesday", "", "", ""),
        createData("Thursday", "", "", ""),
        createData("Friday", "", "", ""),
    ],
    [
        createData("Monday", "React and Testing", "yes availabe", ""),
        createData("Tuesday", "react", "Not currently", ""),
        createData("Wednesday", "", "", ""),
        createData("Thursday", "", "", ""),
        createData("Friday", "", "", ""),
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
