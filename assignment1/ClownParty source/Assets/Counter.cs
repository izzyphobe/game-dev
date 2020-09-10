using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;

public class Counter : MonoBehaviour
{
    [SerializeField] private int balloonTotal;
    TextMeshProUGUI text;
    private int balloons;
    // Start is called before the first frame update
    void Start()
    {
        text = gameObject.GetComponent<TextMeshProUGUI>();
        balloons = 0;
        text.text = balloons + " / " + balloonTotal;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void addBalloon(){
        balloons++;
        text.text = balloons + " / " + balloonTotal;
        if(balloons == balloonTotal) SceneManager.LoadScene("Victory");
    }
}
