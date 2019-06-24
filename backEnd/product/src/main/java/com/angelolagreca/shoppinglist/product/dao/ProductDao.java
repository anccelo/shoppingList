package com.angelolagreca.shoppinglist.product.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.yaml.snakeyaml.events.Event.ID;

import com.angelolagreca.shoppinglist.product.entity.ProductEntity;

public interface ProductDao<T> extends JpaRepository<ProductEntity, ID> {

}
