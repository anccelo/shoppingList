package com.angelolagreca.shoppinglist.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.angelolagreca.shoppinglist.product.dao.ProductDao;
import com.angelolagreca.shoppinglist.product.entity.ProductEntity;

@Service
public class ProductService<T> {

	@Autowired
	ProductDao<ProductEntity> productDao;

	public List<ProductEntity> getAllService() {
		return productDao.findAll();

	}

	public boolean createProductService(@RequestBody ProductEntity product) {
		productDao.save(product);
		return true;
	}

}
