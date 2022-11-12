const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDB() {
	const client = await MongoClient.connect("mongodb://localhost:27017")
	database = client.db('express')
}

function getDB() {
	if(!database) {
		throw new Error('FAILED GETDB FROM DATA')
	}
	return database
}

module.exports = {
	connectToDB : connectToDB,
	getDB : getDB
}