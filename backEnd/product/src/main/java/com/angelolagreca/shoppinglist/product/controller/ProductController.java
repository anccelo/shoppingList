package com.angelolagreca.shoppinglist.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angelolagreca.shoppinglist.product.entity.ProductEntity;
import com.angelolagreca.shoppinglist.product.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping(value = "/product", produces = { "application/json" })
public class ProductController<T> {

	@Autowired
	ProductService<T> productService;

	@GetMapping
	public List<ProductEntity> getAllCtrl() {
		return productService.getAllService();
	}

	@PostMapping
	public boolean createProductCtrl(@RequestBody ProductEntity product) {
		return productService.createProductService(product);
	}

}
