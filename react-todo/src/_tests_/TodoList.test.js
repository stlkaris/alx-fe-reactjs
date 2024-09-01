import React from 'react'
import { render, fireEvent, getByText, screen } from '@testing-library/react'
import TodoList from './components/TodoList'


test('renders initial todos', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('Learn React')).toBeInTheDocument();
    expect(getByText('Build a Todo List')).toBeInTheDocument();
    expect(getByText('Write Tests')).toBeInTheDocument();
});

test('adds a new todo', () => {
    const { getByPlaceholderText, getByText} = render(<TodoList />);
    const input = getByPlaceholderText('Add a new todo')
    const addButton = getByText('Add Todo');

    fireEvent.change(input, {target: { value: 'New Todo'}})
    fireEvent.click(addButton);
    
    expect(getByText('New Todo')).getByPlaceholderText
});

test('toggles todo completion', () => {
    const {getByText} = render(<TodoList />);
    const todo = getByText('Learn React')

    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: line-through')

    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: none')
});

test('deletes a todo', () => {
    const {getByText, queryByText} = render(<TodoList />);
    const todo = getByText('Learn React');
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);
    expect(queryByText('earn React')).not.toBeInTheDocument();
});

test('renders TodoList component', () => {
    render(<TodoList />);
    const linkElement = screen.getByText(/Todo List/i);
    expect(linkElement).toBeInTheDocument();
  });

