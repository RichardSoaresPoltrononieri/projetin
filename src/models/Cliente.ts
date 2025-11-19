import dynamoose from 'dynamoose';

const clienteSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      type: 'global',
      name: 'emailIndex'
    }
  },
  active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: String,
    required: true
  },
  updated_at: {
    type: String,
    required: true
  }
});

const Cliente = dynamoose.model('Clientes', clienteSchema, {
  tableName: 'Clientes',
  create: false,
  waitForActive: false
});

export { Cliente };
