using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Basket : MonoBehaviour
{
    public Transform obj;
    Vector3 worldPosition;
    float startY;
    Transform[] children;

    // Start is called before the first frame update
    void Start()
    {
        children = GetComponentsInChildren<Transform>();
        obj = GetComponent<Transform>();
        startY = obj.position.y+150;
    }

    // Update is called once per frame
    void Update()
    {
        Vector3 mousePos = Input.mousePosition;
        mousePos.z = Camera.main.nearClipPlane;
        mousePos.y = startY;
        worldPosition = Camera.main.ScreenToWorldPoint(mousePos);
        worldPosition.y = -4.93f;
        obj.position = worldPosition;
    }

    void removeBasket(int count){
        if(count ==1) Destroy(children[2].gameObject);
        if(count == 2) Destroy(children[1].gameObject);
    }
}
