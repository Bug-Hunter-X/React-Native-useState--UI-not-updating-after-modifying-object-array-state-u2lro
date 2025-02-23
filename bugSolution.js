The correct way to update the state is to create a new object or array, ensuring that React detects the change:
```javascript
import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([{ id: 1, value: 'a' }]);

  const updateData = () => {
    // Correct: Creates a new array
    const newData = [...data]; 
    newData[0].value = 'b';
    setData(newData); // UI will update
  };

  return (
    <View>
      <Text>{data[0].value}</Text> 
      <Button title="Update" onPress={updateData} />
    </View>
  );
};
```

Alternatively, for more complex objects, consider using the `immer` library for easier immutable updates.