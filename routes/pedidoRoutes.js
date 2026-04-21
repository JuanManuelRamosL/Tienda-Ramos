const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// CRUD básico
router.get('/pedidos', pedidoController.getAllPedidos);
router.get('/pedidos/:id', pedidoController.getPedidoById);
router.post('/pedidos', pedidoController.createPedido);
router.put('/pedidos/:id', pedidoController.updatePedido);
router.delete('/pedidos/:id', pedidoController.deletePedido);
router.delete('/pedidos', pedidoController.deleteAllPedidos);

// Extras
router.get('/pedidos/payment/:payment_id', pedidoController.getByPaymentId);
router.put('/pedidos/payment/:payment_id', pedidoController.updateStatusByPaymentId);
router.patch('/pedidos/:id/estado', pedidoController.updateEstado);
router.get('/pedidos/user/:userId', pedidoController.getByUserId);

module.exports = router;