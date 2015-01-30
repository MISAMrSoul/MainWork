Public Class MISATagLabel
    Inherits Ext.Net.TagLabel

    Public Sub AddWithObject(tag As MISATag, obj As Object)
        Me.Call("addWithObject", tag, obj)
    End Sub


End Class

Public Class MISATagField
    Inherits Ext.Net.TagField
    Public Sub AddWithObject(tag As MISATag, obj As Object)
        Me.Call("addWithObject", tag, obj)
    End Sub

End Class


Public Class MISATag
    Inherits Ext.Net.Tag


End Class