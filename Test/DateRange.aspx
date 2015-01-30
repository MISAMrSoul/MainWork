<%@ Page Language="VB" %>

<%@ Register Assembly="Ext.Net" Namespace="Ext.Net" TagPrefix="ext" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Date range example</title>   
    <script src="Scripts/Ext/MISAControl.js" type="text/javascript">

    </script>
</head>
<body>
    <form runat="server">
        <ext:ResourceManager runat="server" />
        <MISA:MISADateRange runat="server" ID="drMain" />
        <ext:XScript runat="server">
            <script>
               
            </script>
        </ext:XScript>
    </form>
</body>
</html>
