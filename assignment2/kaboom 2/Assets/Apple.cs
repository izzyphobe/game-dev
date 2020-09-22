using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Apple : MonoBehaviour
{
    public bool spawner;
    private Rigidbody2D rb;
    public int spawnRate;
    int updates = 0;
    private Transform tr;
    private GameObject counter;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        tr = GetComponent<Transform>();
        counter = GameObject.Find("counter");
    }

    void FixedUpdate()
    {
        
        //SPAWNER: create duplicate, make duplicate NOT a spawner, make duplicate fall
        if(spawner){
            if(updates > spawnRate){
                Debug.Log("spawning!");
                GameObject newApple = Instantiate(this.gameObject, tr.position, tr.rotation);
                newApple.GetComponent<Rigidbody2D>().bodyType = RigidbodyType2D.Dynamic;
                newApple.GetComponent<Apple>().spawner = false;
                updates = 0;
            }
            updates++;
        }
        //NOT SPAWNER
        else{
            if(tr.position.y < -22f){
                Destroy(this.gameObject);
                counter.SendMessage("lostApple");
            }
        }
    }

    void NotSpawner(){
        spawner = false;
    }

    void OnCollisionEnter2D(Collision2D col){
        if(col.gameObject.tag == "Basket") {
            Destroy(this.gameObject);
            counter.SendMessage("gotApple");
        }
    }

}
