using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Tree : MonoBehaviour
{
    [SerializeField] private LayerMask groundMask;
    private float speed;
    private BoxCollider2D bc;
    private int dir;


    // Start is called before the first frame update
    void Start()
    {
        bc = GetComponent<BoxCollider2D>();
        dir = 1;
        speed = 0.07f;
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
            transform.position = transform.position + new Vector3(speed * dir, 0, 0);
        }
        else Move(time + 1);
    }

    void OnCollisionEnter2D(Collision2D col){
        if(col.gameObject.tag == "Edge") dir *= -1;     
        Debug.Log("collide");    
    }

    void SpeedUp(){
        speed *= 1.5f;
    }


}
