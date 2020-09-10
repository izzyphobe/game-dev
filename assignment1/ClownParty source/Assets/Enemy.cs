using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    [SerializeField] private LayerMask groundMask;
    private Rigidbody2D rb;
    private BoxCollider2D bc;
    private float dir = 1f;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        bc = GetComponent<BoxCollider2D>();
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void FixedUpdate(){
        Move(0);
    }

    private void Move(int time){
        if(time>5) {
            float horzIn = Input.GetAxis("Horizontal");
            transform.position = transform.position + new Vector3(0.1f * dir, 0, 0);
        }
        else Move(time + 1);
    }

    void OnCollisionEnter2D(Collision2D col){
        if(col.gameObject.tag == "Player"){
            col.gameObject.SendMessage("dead");
        }
        else {
            if(dir == -1) dir = 1;
            else dir = -1;
            Debug.Log("collide");
        }
    }
}
