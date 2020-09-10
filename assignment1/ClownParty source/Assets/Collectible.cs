using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Collectible : MonoBehaviour
{

    Rigidbody2D rb;
    CircleCollider2D cc;
    [SerializeField] private LayerMask groundMask;
    GameObject counter;
    
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        cc = GetComponent<CircleCollider2D>();
        counter = GameObject.Find("balloonCounter");
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnCollisionEnter2D(Collision2D col){
        Destroy(this.gameObject);
        counter.SendMessage("addBalloon");
    }

    void OnCollisionExit2D(){
        
    }
}
