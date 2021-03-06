package com.ishyiga.transilator.repository;

import com.ishyiga.transilator.model.Translation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;


@RepositoryRestResource(collectionResourceRel="translation", path="translator")
@CrossOrigin(origins = "*")
public interface TranslationRepository extends JpaRepository<Translation, Integer> {
}