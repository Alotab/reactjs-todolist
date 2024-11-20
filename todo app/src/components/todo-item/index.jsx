import { Card, CardActions, CardContent, Typography } from "@mui/material"



function TodoItem({todo, fetchDetialsOfCurrentTodo}){
    // console.log(todo);
    return <Card sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }}>
        <CardContent>
            <Typography variant="h5" color={'text.secondary'}>
                {todo?.todo} 
            </Typography>
        </CardContent>
        <CardActions>
            <button 
            onClick={() => fetchDetialsOfCurrentTodo(todo?.id)}
            sx={{
                backgroundColor: "green",
                color: "#fff",
                opacity: "0.75",
                '&:hover' :{
                    backgroundColor: "black",
                    color: "#fff",
                    opacity: '1'
                },
            }}>Show Details</button>
        </CardActions>
    </Card>
}

export default TodoItem;