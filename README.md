The game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. A cellular automaton consists of a regular grid of cells, each in one of a finite number of states such as on and off or in this case, alive or dead. For each cell, a set of cells called its neighborhood is defined relative to the specified cell. In the original Game of Life, the neighborhood consists of both horizontal, vertical and diagonal cells.

Every cell interacts with its neighbours according to the rules defined on the right. The default rules of the game of life are now set, but feel free to play around with your own rules.

This is my attempt at making the game of life from scratch with Javascript, without the use of any external sources such as blog posts or video tutorials on the Game of Life. As I just learned CSS Grid, and are trying to master DOM manipulation, I figured I'd combine the two to acchieve my goals.


My logic is as follows;



1. Create a grid with blocks that have their row and column number as coordinatates as such;

    | 1,1 | 1,2 | 1,3 | 1,4 |

    | 2,1 | 2,2 | 2,3 | 2,4 |

    | 3,1 | 3,2 | ***3,3*** | 3,4 |

    | 4,1 | 4,2 | 4,3 | 4,4 |



2. Define the neighbourhood;

    To see which items are neighbours off every other item, non-neighbours can be crossed off for such item if the following logic aplies (I will refer to the item that is checked against all other items as the parent item, and the items that it is checked against as it's children); 

    - The difference between the row numbers of a child compared to the parent is bigger than 1 or smaller then -1.
    - The difference between the column numbers of a child compared to the parent is bigger than 1 or smaller then -1. 

    The row and column maps are as follows; 


    | 1 | 1 | 1 | 1 |       | 1 | 2 | 3 | 4 |                           

    | 2 | 2 | 2 | 2 |       | 1 | 2 | 3 | 4 |                           
                                                  
    | 3 | 3 | ***3*** | 3 |       | 1 | 2 | ***3*** | 4 |                           

    | 4 | 4 | 4 | 4 |       | 1 | 2 | 3 | 4 |                           

          rows                  columns                                 


    Aplying the logic above we get:


    | x | x | x | x |       | x | 2 | 3 | 4 |

    | 2 | 2 | 2 | 2 |       | x | 2 | 3 | 4 |

    | 3 | 3 | ***3*** | 3 |       | x | 2 | ***3*** | 4 |
    
    | 4 | 4 | 4 | 4 |       | x | 2 | 3 | 4 |

          rows                  columns

    Combining the two results in:

    | x,x | x,x | x,x | x,x |

    | x,x | 2,2 | 2,3 | 2,4 |

    | x,x | 3,2 | ***3,3*** | 3,4 |

    | x,x | 4,2 | 4,3 | 4,4 |


    *Implemented in the future*

    As a variation on the neighbour rules of the original Game of Life, I also wanted to implement the rules of von Neumann neighborhood where only vertical and horizontal blocks are seen as neighbours. 

    To cross off diagonal neighbours, we can add the following logic:

    - The sum of the coordinates of a child is equal to that of the parent.
    - The sum of the coordinates of a child is bigger than 1 and smaller then -1 to that of the parent. 

    | x | x | x | x |

    | x | 4 | 5 | 6 |

    | x | 5 | ***3,3*** | 7 |

    | x | 6 | 7 | 8 |

    results in:

    | x | x | x | x |

    | x | x | 5 | x |

    | x | 5 | ***6*** | 7 |

    | x | x | 7 | x |

    In my code I loop over all children for each parent and check if these rules apply. Then, if a block is alive (in this case black), I push '1' to an array and '0' if the block is dead. Doing so, I'm able to update the status of each block per generation, preventing the result of the previous block to influence the one thereafter. I then loop over all the blocks again and update their status according to the the rules of Game of Life will be applied accordingly.

3. Apply the rules of Game of Life to Neighbours;

    The rules of Game of Life are as follows:

    1. Any live cell with 2 to 3 live neighbours survives.
    2.Any dead cell with 3 live neighbours becomes a live cell.
    3.All other live cells die in the next generation. Similarly, all other dead cells stay dead.




