package de.neuefische.backend.service;


import de.neuefische.backend.model.Status;
import de.neuefische.backend.model.Todo;
import de.neuefische.backend.repo.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static org.springframework.util.Assert.hasText;
import static org.springframework.util.Assert.notNull;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAll() {
        return todoRepository.findAll();
    }

    public Todo create(Todo todo) {
        // check if all business requirements are met
        notNull(todo, "Todo must not be null to be created");
        hasText(todo.getDescription(), "Todo must have a valid description to be created");

        // set user input to "creation" default status OPEN
        todo.setStatus(Status.OPEN);

        return todoRepository.create(todo);
    }

    public Optional<Todo> move(String todoId) {
        Optional<Todo> todoOpt = findTodo(todoId);
        if (todoOpt.isEmpty()) {
            return Optional.empty();
        }
        Todo todo = todoOpt.get();

        // moving a todo in the next state is business logic
        Status actualStatus = todo.getStatus();
        Status nextStatus = actualStatus.next(actualStatus);
        todo.setStatus(nextStatus);

        todoRepository.save(todo);
        return Optional.of(todo);
    }

    private Optional<Todo> findTodo(String todoId) {
        return todoRepository.find(todoId);
    }

    public Optional<Todo> delete(String todoId) {
        Optional<Todo> todoOpt = findTodo(todoId);
        if (todoOpt.isEmpty()) {
            return Optional.empty();
        }
        Todo todo = todoOpt.get();

        // remove todo from repo
        return todoRepository.delete(todo);
    }
}
