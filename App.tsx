import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Item } from './src/types/items';
import Factory from './src/components/Factory/Factory';

const items : Array<Item> = [
  {
    type: 'row',
    width: 1,
    content: [
      {
        type: 'column',
        width: 2,
        content: [
          {
            label: 'Nombre',
            name: 'name',
            type: 'input',
            value: '',
            placeholder: 'John'
          },
        ]
      },
      {
        type: 'column',
        width: 2,
        content: [
          {
            label: 'Segundo nombre',
            name: 'name2',
            type: 'input',
            value: '',
            placeholder: 'Wick'
          }
        ]
      }
    ]
  },
  {
    type: 'row',
    width: 1,
    content: [
      {
        type: 'column',
        width: 2,
        content: [
          {
            label: 'Apellido',
            name: 'name',
            type: 'input',
            value: '',
            placeholder: 'Doe'
          },
        ]
      },
      {
        type: 'column',
        width: 2,
        content: [
          {
            label: 'Segundo apellido',
            name: 'name2',
            type: 'input',
            value: '',
            placeholder: 'Harrinzon'
          }
        ]
      }
    ]
  },
  {
    type: 'row',
    content: [
      {
        label: 'Email',
        name: 'email',
        type: 'input',
        value: '',
        placeholder: 'john@mail.com'
      },
    ]
  },
  {
    type: 'row',
    content: [
      {
        label: 'Contraseña',
        name: 'password',
        type: 'password',
        value: '',
        placeholder: '******'
      },
    ]
  },
  {
    type: 'row',
    content: [
      {
        label: 'Confirmar contraseña',
        name: 'password2',
        type: 'password',
        value: '',
        placeholder: '******'
      },
    ]
  },
  {
    type: 'row',
    content: [
      {
        type: 'button',
        label: 'Registrarme',
        typeButton: 'primary',
        name: 'button_onSubmit'
      }
    ]
  },
  {
    type: 'row',
    content: [
      {
        type: 'button',
        label: 'Cancelar',
        typeButton: 'normal',
        name: 'button_onSubmit'
      }
    ]
  },
  {
    type: 'row',
    content: [
      {
        type: 'column',
        width: 2,
        content: [
          {
            type: 'button',
            label: 'Iniciar',
            typeButton: 'primary',
            name: 'button_onSubmit'
          }
        ]
      },
      {
        type: 'column',
        width: 2,
        content: [
          {
            type: 'button',
            label: 'Borrar',
            typeButton: 'normal',
            name: 'button_onSubmit'
          }
        ]
      }
    ]
  }
];


export default function App() {
  const factory = new Factory();

  const components = items.map((item: Item) => factory.create(item));

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {components}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
