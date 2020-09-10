using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;

public class Player : MonoBehaviour
{
    [SerializeField] private LayerMask groundMask;
    private Rigidbody2D rb;
    private CircleCollider2D cc;
    private float speed = 5f;
    private float jumpVelo = 50f;
    private float jumpForce = 620f;
    private bool grounded;



    Vector3 cameraPos;
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        cc = GetComponent<CircleCollider2D>();
        grounded = false;
    }

    // Update is called once per frame
    void Update(){
        float horzIn = Input.GetAxis("Horizontal");
        transform.position = transform.position + new Vector3(horzIn * speed * Time.deltaTime, 0, 0);
        if (Input.GetKeyDown(KeyCode.W) && grounded == true)
        {
            rb.AddForce(Vector2.up * jumpForce);
        }
        if(transform.position.y < -20f) SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        if (Input.GetKey("escape"))
        {
            Application.Quit();
        }
    }

    void OnCollisionEnter2D(Collision2D col){
        if (col.gameObject.tag == "Platform"){
            grounded = true;
        } 
    }
    void OnCollisionExit2D(Collision2D col){
        if (col.gameObject.tag == "Platform"){
            grounded = false;
        } 
    }

    void dead() {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

    


}
