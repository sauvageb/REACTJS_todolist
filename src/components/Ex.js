// Import des bibliothèques nécessaires
import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Ex() {
    // État pour gérer la liste de tâches
    const [tasks, setTasks] = useState([]);
    // État pour gérer la valeur de la recherche
    const [searchValue, setSearchValue] = useState('');

    // Fonction pour ajouter une tâche
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            });
    }, []);

    // Fonction pour filtrer les tâches en fonction de la recherche
    const filteredTasks = [];
    // tasks.filter((task) => task.includes(searchValue));

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Ma Liste de Tâches
                    </Typography>
                    <Button color="inherit">Ajouter une Tâche</Button>
                </Toolbar>
            </AppBar>
            <TextField
                label="Rechercher une tâche"
                variant="outlined"
                fullWidth
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{marginTop: 2, marginLeft: 2, marginRight: 2}}
            />
            <List>
                {filteredTasks.map((task, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={task}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Ex;
