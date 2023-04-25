import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(day, referenceMaterial, lectureRecording, classroomLink) {
  return {
    day,
    referenceMaterial,
    lectureRecording,
    classroomLink,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.day}
        </TableCell>
        <TableCell align="right">{row.referenceMaterial}</TableCell>
        <TableCell align="right">{row.lectureRecording}</TableCell>
        <TableCell align="right">{row.classroomLink}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Week {row.day}
              </Typography>
              <Table size="small" aria-label="week data">
                <TableHead>
                  <TableRow>
                    <TableCell>Reference Material</TableCell>
                    <TableCell>Lecture Recordings</TableCell>
                    <TableCell>Classroom Links</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <a href={row.referenceMaterial}>{row.referenceMaterial}</a>
                    </TableCell>
                    <TableCell>
                      <a href={row.lectureRecording}>{row.lectureRecording}</a>
                    </TableCell>
                    <TableCell>
                      <a href={row.classroomLink}>{row.classroomLink}</a>
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

Row.propTypes = {
  row: PropTypes.shape({
    day: PropTypes.string.isRequired,
    referenceMaterial: PropTypes.string.isRequired,
    lectureRecording: PropTypes.string.isRequired,
    classroomLink: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Monday', '', '', ''),
  createData('Tuesday', '', '', ''),
  createData('Wednesday', '', '', ''),
  createData('Thursday', '', '', ''),
  createData('Friday', '', '', ''),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Week 1</TableCell>
            <TableCell align="right">Topics Covered</TableCell>
            <TableCell align="right">Brief Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}