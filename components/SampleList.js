import React,{useState} from 'react'
import { View,FlatList,Text,StyleSheet,Image, Button,Alert,TouchableOpacity} from 'react-native'


const SampleListItem = () =>{
    const [isvalue, setIsvalue] = useState(true)
    const [items, setItems] = useState([
      {
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      },
      {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
      },
      {
        id: 3,
        name: 'Larry Little',
        age: 36,
        image:
         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      },
      {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        image:
         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
      },
      {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        image:
         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
      }
    ]);
  
    const pressHandler = (id)=>{
      console.log(id)
      alert(id+ 'clicked')
    }


    const[show,setShow]=useState(true)
    const[hide,sethide]=useState(true)
    
    const clearVal = ()=>{
     setItems("")
     setIsvalue(false)
    // refreshVal()
    }
    const refreshVal = ()=>{ 
      
      setItems(items)
     }

     return(

      <View style={styles.container}>
        
        {/* <Text style={flattenStyle}>React Native</Text> */}
        
    
        <View style={styles.container}>
        {show?(
          <>
          <Text  style={styles.textVal}>5 Birthdays Today</Text>
        <FlatList
            style={styles.fixToText}
                keyExtractor={item=>item.id}
                data={items}
                renderItem={({item})=>{return(
                  <>
                  
                    <TouchableOpacity onPress={()=>pressHandler(item.name)}>
                      
                    <Image source={{ uri: `${item.image}` }} style={{ width: 75, height: 75, borderRadius: 37.5 }} />
                    <Text style={styles.textVal}>{item.name} -{item.age}  Years  </Text>
                   
                    </TouchableOpacity>             
    </>
    
                )}}
             />
    
    <Button
            title="clear All"
            color="#f194ff"
          
            onPress={()=>setShow(!show)}
          />
        
             </>
    ):
    
    <View >
<Text  style={styles.textVal}>0 Birthdays Today</Text>
     
    <Button
    title="Refresh"
    color="#32a840"
    style={styles.button}
    onPress={()=>setShow(!show)}
    />
   
    
    </View>
    
    }
      
    
    {/* {hide?(
          <>
          <Text  style={page.bir}>5 Birthdays Today</Text>
        <FlatList
            style={page.fixToText}
                keyExtractor={item=>item.id}
                data={todos}
                renderItem={({item})=>{return(
                  <>
                  
                    <TouchableOpacity onPress={()=>pressHandler(item.name)}>
                      
                    <Image source={{ uri: `${item.image}` }} style={{ width: 75, height: 75, borderRadius: 37.5 }} />
                    <Text style={page.nam}>{item.name} -{item.age}  Years  </Text>
                   
                    </TouchableOpacity>             
    </>
    
                )}}
             />
    
    
         
             </>
    ):null} */}
          
          
        </View>
        
      </View>
        )


    // return(
    //     <View  style={styles.container}>
    //        <Text style={styles.container}>{"5 Birthdays Today"}</Text>
    //     <FlatList
    //         keyExtractor={item=>item.id}
    //         data={items}
    //         renderItem={({item})=>{return(
    //             <TouchableOpacity onPress={()=>pressHandler(item.id)}>
                 
    //               <Image
    //                 style={styles.flist}
    //                 source={{
    //                   uri: item.image,
    //                 }}
    //              />
                 
    //              <View  style={styles.textVal}>
    //               <Text style={styles.textVal}>{item.name}</Text>
    //               <Text style={styles.textVal}>{item.age}</Text>
    //               </View>
                  
    //             </TouchableOpacity>         
                   
    //         )}}
            
    //      />
    //      <Button
         
    //                 title="CLEAR ALL"
    //                 onPress={() => clearVal() }
    //                 title={isvalue ? "CLEAR ALL" : "REFRESH"}
                    
    //               />
    //      </View>

         
    // )
}

const styles = StyleSheet.create({
    
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: 150,
        width: 800
      },
    flist : {
        borderColor : 'blue', 
        margin :10,
        padding : 50,
        height: 150,
        width: 100,
        borderRadius: 37.5
    },
    textVal: {
      flex: 1,
      left: 120,
      alignItems: 'top|center',
      justifyContent: 'top'
    },
    button:{
      marginTop:500
    },
    name:{
      padding:20
    }
  }
)

export default SampleListItem;



