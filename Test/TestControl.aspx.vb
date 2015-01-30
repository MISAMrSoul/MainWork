Imports MISA.Control

Public Class TestControl
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Me.IsPostBack Then
            Dim obj As New Customer
            With obj
                .CustomerID = Guid.NewGuid
                .CustomerCode = "KH001"
                .CustomerName = "Phạm Duy Kiên"
            End With
            Dim t As New MISATag
            t.Value = obj.CustomerID.ToString
            t.Text = obj.CustomerCode & " - " & obj.CustomerName
            t.Selected = True
            tagMain.AddWithObject(t, obj)
        End If
    End Sub

    Protected Sub Unnamed_Event()
        Dim item = tagMain.Tags
        Dim t = item.FirstOrDefault

    End Sub
End Class

<Serializable()> _
Public Class Customer

    Public Property CustomerID As Guid
    Public Property CustomerCode As String
    Public Property CustomerName As String

End Class