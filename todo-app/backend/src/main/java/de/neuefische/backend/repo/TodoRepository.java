package de.neuefische.backend.repo;

import de.neuefische.backend.model.Todo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import static org.springframework.util.Assert.hasText;
import static org.springframework.util.Assert.notNull;

@Repository
public class TodoRepository {

    // key == todo.id
    private final Map<String, Todo> todosMap = new HashMap<>();

    public List<Todo> findAll() {
        return new ArrayList<>(todosMap.values());
    }

    public Todo create(Todo todo) {
        // all persistence related issues are handled by the repo

        todo.setId(UUID.randomUUID().toString());
        persist(todo);

        return todo;
    }

    public Optional<Todo> find(String todoId) {
        hasText(todoId, "Id of a Todo must not be blank to find");

        Todo todo = todosMap.get(todoId);
        return Optional.ofNullable(todo);
    }

    public void save(Todo todo) {
        notNull(todo, "A Todo must not be null to be saved");
        persist(todo);
    }

    private void persist(Todo todo) {
        todosMap.put(todo.getId(), todo);
    }

    public Optional<Todo> delete(Todo todo) {
        notNull(todo, "A Todo must not be null to be deleted");
        hasText(todo.getId(), "Id of a Todo must not be blank to be deleted");

        Todo todoDeleted = todosMap.remove(todo.getId());
        return Optional.ofNullable(todoDeleted);
    }
}
