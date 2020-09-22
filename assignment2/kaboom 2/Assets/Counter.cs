using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;

public class Counter : MonoBehaviour
{
    private int appleCount;
    private int applesLost;
    [SerializeField] public int appleTotal;
    TextMeshPro text;

    private GameObject basket;
    // Start is called before the first frame update
    void Start()
    {
        text = gameObject.GetComponent<TextMeshPro>();
        applesLost = 0;
        appleCount = 0;
        basket = GameObject.Find("basket");
        text.text = appleCount + "/" + appleTotal;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void lostApple(){
        applesLost ++;
        if(applesLost > 2) SceneManager.LoadScene("GameOver");
        else basket.SendMessage("removeBasket", applesLost);
    }

    void gotApple(){
        appleCount++;
        text.text = appleCount + "/" + appleTotal;
        if(appleCount >= appleTotal) SceneManager.LoadScene("Victory");   
    }
}
