import React, { useCallback } from 'react'
import './asset.scss';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LabelImportant from '@material-ui/icons/LabelImportant';
import Chip from '@material-ui/core/Chip';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));


function Row(props) {
    debugger;

    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const chipStyle = useStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{parseInt(row.area)}</TableCell>
                <TableCell align="right">{parseInt(row.income)}</TableCell>
                <TableCell align="right">{parseInt(row.income) * parseInt(row.area)}</TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Labels
                </Typography>

                            <div className={chipStyle.root}>
                                {
                                    row.label && row.label.length > 0 ? row.label.map((label) => (

                                        <Chip label={label}
                                            variant="outlined"
                                            size="small" color="primary"
                                            avatar={<LabelImportant></LabelImportant>} />

                                    )) : ''}
                            </div>

                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function ProductsList(props) {

    // const listItems = props.assetList && props.assetList.length > 0 ? props.assetList.map((item, i) =>
    //     <div></div>
    // ) : null;

    return (
        <React.Fragment>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Asset</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Sqft</TableCell>
                            <TableCell align="right">Rate</TableCell>
                            <TableCell align="right">Total(Rs)</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.assetList && props.assetList.length > 0 ? props.assetList.map((item, i) => (
                            <Row key={i} row={item} />
                        )) : ''}
                    </TableBody>
                </Table>
            </TableContainer>

        </React.Fragment>
    )
}
