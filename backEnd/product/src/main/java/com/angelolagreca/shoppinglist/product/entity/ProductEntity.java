package com.angelolagreca.shoppinglist.product.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProductEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idProduct;
	private String nameProduct;

	public ProductEntity() {
	}

	public ProductEntity(int idProduct, String nameProduct) {
		this.idProduct = idProduct;
		this.nameProduct = nameProduct;
	}

	public int getIdProduct() {
		return idProduct;
	}

	public String getNameProduct() {
		return nameProduct;
	}

	public void setNameProduct(String nameProduct) {
		this.nameProduct = nameProduct;
	}

	public ProductEntity(String nameProduct) {
		this.nameProduct = nameProduct;
	}

	@Override
	public String toString() {
		return "Product [id=" + idProduct + ", name=" + nameProduct + "]";
	}

}
