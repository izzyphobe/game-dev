﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneLoad : MonoBehaviour
{
    // Start is called before the first frame update
    public void LoadLevel(int lvl){
        SceneManager.LoadScene(lvl);
    }
    
}
