import React from 'react';
import { Container } from 'semantic-ui-react';

import TodosList from './TodosList';
import AddTodo from './AddTodo';

export default () => {
    return (
        <Container text>
            <AddTodo />
            <TodosList />
        </Container>
    ); 
}

