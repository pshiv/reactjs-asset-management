import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import Chip from '@material-ui/core/Chip';
import LabelImportant from '@material-ui/icons/LabelImportant';
import Input from '@material-ui/core/Input';
import './asset.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        '& > *': {
            margin: theme.spacing(0.5),
            width: '100%',
        },

        '& .MuiFormControl-root': {

        },
        '& label': {
            color: '#a09f9f'
        },
        '& select': {
            height: '40px',
            border: 'none',
            borderBottom: '1px solid gray',
            color: '#a3a3a3',
            outline: 'none',
            fontSize: '17px',
            marginTop: '10px'
        },
        '& select:hover': {
            borderBottom: '2px solid #000000',
        }
    },

    button: {
        margin: theme.spacing(1),
    },
}));


function AseetEntry(props) {

    // const [onchangeEvent] = props

    const inputStyle = useStyles();

    return (
        <React.Fragment>
            <div className="entry-form">
                <Typography variant="h5" gutterBottom>Entry</Typography>
                <div className="name-input">
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" onChange={(e) => props.onchangeEvent(e)} value={props.state.name} />
                    </div>
                </div>
                <div className={inputStyle.root} >
                    <select name="category" value={props.state.category} onChange={(e) => props.onchangeEvent(e)}>
                        <option>Select</option>
                        <option value="Shop">Shop</option>
                        <option value="Bridge">Bridge</option>
                        <option value="Mall">Mall</option>
                        <option value="Airport">Airport</option>
                    </select>
                </div>
                <div className="asset-income">
                    <div>
                        <label>Area/sqft:</label>
                        <input type="text" name="area" onChange={(e) => props.onchangeEvent(e)} value={props.state.area} />
                    </div>
                    <div>
                        <label>Income/sqft:</label>
                        <input type="text" name="income" onChange={(e) => props.onchangeEvent(e)} value={props.state.income} />
                    </div>

                    <div>
                        <label>Total: {props.state.income * props.state.area}</label>
                    </div>
                </div>

                <div className="asset-label">
                    <div>
                        <label>Label:</label>
                        <input type="text" name="labelName" value={props.state.labelName} onChange={(e) => props.onchangeEvent(e)} />
                        <Button
                            variant="contained"
                            color="primary"
                            size=""
                            className={inputStyle.button}
                            startIcon={'+'}
                            onClick={() => props.addLabelEvent(props.state.labelName)}
                        >
                            Add</Button>
                    </div>
                </div>

                {props.labelArr && props.labelArr.length > 0 ? <div className="chip-wrapper" >
                    {props.labelArr && props.labelArr.length > 0 ? props.labelArr.map((label, i) => (

                        <Chip
                            icon={<LabelImportant />}
                            label={label}
                            onDelete={() => props.handleDelete(i)}
                            clickable
                            size="small"
                            color="secondary"
                            key={i}
                        />

                    )) : ''}
                </div>
                    : ''}





                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={inputStyle.button}
                    startIcon={<SaveIcon />}

                    onClick={() => props.makeNewEntry(props.state)}
                >
                    Save
      </Button>
            </div>

        </React.Fragment>
    )
}

export default AseetEntry
