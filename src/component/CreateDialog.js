import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

export default function CreateDialog(props) {
    let [isOpen, setIsOpen] = props.openState;
    let [newItem, setNewItem] = props.newItemState;
    let CreateNewItem = props.CreateNewItem;
    let handleClose = () => {
        setIsOpen(false);
    }
    let handleChange = (e) => {
        setNewItem(e.target.value);
    }
    
    let handleSave = () => {
        CreateNewItem(newItem);
        setIsOpen(false);
    }

    const DialogContent = withStyles(theme => ({
        root: {
            margin: 0,
            padding: theme.spacing.unit * 2,
        },
    }))(MuiDialogContent);

    const DialogTitle = withStyles(theme => ({
        root: {
            borderBottom: `1px solid ${theme.palette.divider}`,
            margin: 0,
            padding: theme.spacing.unit * 2,
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing.unit,
            top: theme.spacing.unit,
            color: theme.palette.grey[500],
        },
    }))(props => {
        const { children, classes, onClose } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    const DialogActions = withStyles(theme => ({
        root: {
            borderTop: `1px solid ${theme.palette.divider}`,
            margin: 0,
            padding: theme.spacing.unit,
        },
    }))(MuiDialogActions);

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isOpen}
        >
            <DialogTitle onClose={handleClose}>
                Modal title
             </DialogTitle>
            <DialogContent>
                <TextField
                    label="Item Name"
                    value={newItem}
                    onChange={handleChange}
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSave} color="primary">
                    Save changes
            </Button>
            </DialogActions>
        </Dialog>
    );
}