import dynamoose from 'dynamoose';

const customerSchema = new dynamoose.Schema({
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

const Customer = dynamoose.model('Clientes', customerSchema, {
  tableName: 'Clientes',
  create: false,
  waitForActive: false
});

export { Customer };
