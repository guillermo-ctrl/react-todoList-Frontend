package de.neuefische.backend.model;

public enum Status {
    OPEN, IN_PROGRESS, DONE;


    public Status next(Status status) {
        switch (status) {
            case OPEN:
                return IN_PROGRESS;
            default:
                return DONE;
        }
    }
}
