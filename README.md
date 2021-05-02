This is my attempt at making the game of life from scratch with Javascript, without the use of any external sources such as blog posts or video tutorials on the Game of Life. 

My logic is as follows;

1. Create a grid with blocks that have their row and column number as coordinatates as such;

    | 1,1 | 1,2 | 1,3 | 1,4 |

    | 2,1 | 2,2 | 2,3 | 2,4 |

    | 3,1 | 3,2 | ***3,3*** | 3,4 |

    | 4,1 | 4,2 | 4,3 | 4,4 |

2. The sum of all grid items is mapped to compare each item with each other item by itterating over it.

    | 2 | 3 | 4 | 5 |

    | 3 | 4 | 5 | 6 |

    | 4 | 5 | **6** | 7 |

    | 5 | 6 | 7 | 8 |

    To see which items are neighbours off every other item, non-neighbours can be crossed of for such item if the following logic aplies (I will refer to the item that is checked against all other items as the parent item, and the items that it is checked against as children); 
    
    - The sum of the coordinates of a child is equal to that of the parent.
    - The sum of the coordinates of a child is bigger than 1 and smaller then -1 to that of the parent. 

    Lets say we check which children are neighbours of the parent at coordinates 3,3 (i.e. item 11 in itteration). We cross of each grid item that doesn't follow the logic mentioned above.

    | x | x | x | 5 |

    | x | x | 5 | x |

    | x | 5 | ***6*** | 7 |

    | 5 | x | 7 | x |

    To eliminate the rest of the children (don't take this out of context), we apply the second rule to the individual row and column numbers, i.e;

    - The difference between the row numbers of a child compared to a parent is bigger than 1 or smaller then -1.
    - The difference between the column numbers of a child compared to a parent is bigger than 1 or smaller then -1. 

    The row and column maps are as follows; 


    | 1 | 1 | 1 | 1 |       | 1 | 2 | 3 | 4 |                           

    | 2 | 2 | 2 | 2 |       | 1 | 2 | 3 | 4 |                           
                                                  
    | 3 | 3 | ***3*** | 3 |       | 1 | 2 | ***3*** | 4 |                           

    | 4 | 4 | 4 | 4 |       | 1 | 2 | 3 | 4 |                           

          rows                  columns                                 


    Aplying the logic above we get:


    | x | x | x | x |       | x | 2 | 3 | 4 |

    | x | x | x | x |       | x | 2 | 3 | 4 |

    | 3 | 3 | ***3*** | 3 |       | x | 2 | ***3*** | 4 |
    
    | 4 | 4 | 4 | 4 |       | x | 2 | 3 | 4 |

          rows                  columns




    All the combined elminated children results in:

    | x | x | x | x |

    | x | x | 5 | x |

    | x | 5 | ***6*** | 7 |

    | x | x | 7 | x |


3. Apply the rules of Game of Life to Neighbours
