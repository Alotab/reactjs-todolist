import { Dialog, DialogTitle } from "@mui/material";
import { Fragment } from "react";



function TodoDetails({TodoDetails, openDialog}) {

    return <Fragment>
        <Dialog>
            <DialogTitle>{TodoDetails?.todo}</DialogTitle>
        </Dialog>
    </Fragment>

}