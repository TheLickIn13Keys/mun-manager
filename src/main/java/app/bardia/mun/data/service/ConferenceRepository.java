package app.bardia.mun.data.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import app.bardia.mun.data.entity.Conference;

public interface ConferenceRepository extends JpaRepository<Conference, Long>, JpaSpecificationExecutor<Conference> {

}
