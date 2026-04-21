const Pedido = require('../models/pedidosModel');

// Obtener todos los pedidos
const getAllPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.getAll();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener pedidos' });
    }
};

// Obtener pedido por ID
const getPedidoById = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.getById(id);

        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }

        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el pedido' });
    }
};

// Crear pedido
const createPedido = async (req, res) => {
    try {
        const nuevoPedido = await Pedido.create(req.body);
        res.status(201).json(nuevoPedido);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear pedido' });
    }
};

// Actualizar pedido
const updatePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedidoActualizado = await Pedido.update(id, req.body);

        res.json(pedidoActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar pedido' });
    }
};

// Eliminar pedido
const deletePedido = async (req, res) => {
    try {
        const { id } = req.params;
        await Pedido.delete(id);

        res.json({ message: 'Pedido eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar pedido' });
    }
};

// Eliminar todos
const deleteAllPedidos = async (req, res) => {
    try {
        await Pedido.deleteAll();
        res.json({ message: 'Todos los pedidos eliminados' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar pedidos' });
    }
};

// Obtener por payment_id
const getByPaymentId = async (req, res) => {
    try {
        const { payment_id } = req.params;
        const pedido = await Pedido.getByPaymentId(payment_id);

        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }

        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar por payment_id' });
    }
};

// Actualizar estado por payment_id
const updateStatusByPaymentId = async (req, res) => {
    try {
        const { payment_id } = req.params;
        const pedido = await Pedido.updateStatusByPaymentId(payment_id, req.body);

        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar estado' });
    }
};

// Actualizar estado por ID
const updateEstado = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const pedido = await Pedido.updateStatus(id, estado);
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar estado' });
    }
};

// Obtener pedidos por userId
const getByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const pedidos = await Pedido.getByUserId(userId);

        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener pedidos del usuario' });
    }
};

module.exports = {
    getAllPedidos,
    getPedidoById,
    createPedido,
    updatePedido,
    deletePedido,
    deleteAllPedidos,
    getByPaymentId,
    updateStatusByPaymentId,
    updateEstado,
    getByUserId
};