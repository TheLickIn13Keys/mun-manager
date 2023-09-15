package app.bardia.mun.data.service;

import app.bardia.mun.data.entity.Conference;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ConferenceService {
    private final ConferenceRepository repository;

    public ConferenceService(ConferenceRepository repository) {
        this.repository = repository;
    }

    public Optional<Conference> get(Long id) {
        return repository.findById(id);
    }

    public Conference update(Conference entity) {
        return repository.save(entity);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Page<Conference> list(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Page<Conference> list(Pageable pageable, Specification<Conference> filter) {
        return repository.findAll(filter, pageable);
    }

    public int count() {
        return (int) repository.count();
    }
}
