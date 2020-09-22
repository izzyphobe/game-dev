using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Edge : MonoBehaviour
{
    [SerializeField] private LayerMask groundMask;
    private BoxCollider2D bc;
    GameObject tree;
    // Start is called before the first frame update
    void Start()
    {
        tree = GameObject.Find("tree");
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnCollisionEnter2D(Collision2D col){
        
    }
}
