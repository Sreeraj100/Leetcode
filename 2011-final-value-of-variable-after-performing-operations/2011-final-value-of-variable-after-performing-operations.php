class Solution {

    /**
     * @param String[] $operations
     * @return Integer
     */
    function finalValueAfterOperations($operations) {
        $val=0;
        for($i=0;$i<count($operations);$i++){
            match($operations[$i]){
                "--X"=>--$val,
                "X--"=>$val--,
                "X++"=>$val++,
                "++X"=>++$val,
                default=>$val,
            };
        };
        return $val;
    }
}